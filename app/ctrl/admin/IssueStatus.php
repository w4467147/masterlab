<?php

namespace main\app\ctrl\admin;

use main\app\classes\PermissionGlobal;
use main\app\classes\UserAuth;
use main\app\ctrl\BaseCtrl;
use main\app\ctrl\BaseAdminCtrl;
use main\app\model\issue\IssueStatusModel;
use main\app\classes\IssueStatusLogic;

/**
 * 事项状态管理控制器
 */
class IssueStatus extends BaseAdminCtrl
{
    /**
     * IssueStatus constructor.
     * @throws \Exception
     */
    public function __construct()
    {
        parent::__construct();
        $userId = UserAuth::getId();
        $this->addGVar('top_menu_active', 'system');
        $check = PermissionGlobal::check($userId, PermissionGlobal::MANAGER_ISSUE_PERM_ID);

        if (!$check) {
            $this->error('权限错误', '您还未获取此模块的权限！');
            exit;
        }
    }
    public function pageIndex()
    {
        $data = [];
        $data['title'] = 'Users';
        $data['nav_links_active'] = 'issue';
        $data['sub_nav_active'] = 'issue_attribute';
        $data['left_nav_active'] = 'status';
        // Default Primary Success Info Warning Danger可选
        $data['colors'] = [ 'info', 'primary', 'success', 'warning', 'danger'];
        $this->render('twig/admin/issue/issue_status.twig', $data);
    }

    /**
     * 获取所有数据
     * @throws \Exception
     */
    public function fetchAll()
    {
        $issueStatusLogic = new IssueStatusLogic();
        $issueStatus = $issueStatusLogic->getAdminIssueStatus();
        $data = [];
        $data['issue_status'] = $issueStatus;

        $this->ajaxSuccess('', $data);
    }

    /**
     * 获取单条数据
     * @param $id
     * @throws \Exception
     */
    public function get($id)
    {
        $id = null;
        if (isset($_GET['_target'][3])) {
            $id = (int)$_GET['_target'][3];
        }
        if (isset($_REQUEST['id'])) {
            $id = (int)$_REQUEST['id'];
        }
        if (!$id) {
            $this->ajaxFailed('参数错误', 'id不能为空');
        }
        $model = new IssueStatusModel();
        $group = $model->getItemById($id);

        $this->ajaxSuccess('操作成功', (object)$group);
    }

    /**
     * 添加数据
     * @param null $params
     * @throws \Exception
     */
    public function add($params = null)
    {
        if (empty($params)) {
            $this->ajaxFailed('错误', '没有提交表单数据');
        }

        if (!isset($params['key']) || empty($params['key'])) {
            $errorMsg['key'] = '关键字不能为空';
        }

        if (isset($params['name']) && empty($params['name'])) {
            $errorMsg['name'] = '名称不能为空';
        }
        $model = new IssueStatusModel();
        if (isset($model->getByName($params['name'])['id'])) {
            $errorMsg['name'] = '名称已经被使用';
        }
        if (isset($model->getByKey($params['key'])['id'])) {
            $errorMsg['key'] = '关键字已经被使用';
        }
        if (!empty($errorMsg)) {
            $this->ajaxFailed('参数错误', $errorMsg, BaseCtrl::AJAX_FAILED_TYPE_FORM_ERROR);
        }

        $info = [];
        $info['name'] = $params['name'];
        $info['_key'] = $params['key'];
        $info['sequence'] = (int)$params['sequence'];
        $info['is_system'] = '0';
        if (isset($params['description'])) {
            $info['description'] = $params['description'];
        }
        if (isset($params['font_awesome'])) {
            $info['font_awesome'] = $params['font_awesome'];
        }
        if (isset($params['color'])) {
            $info['color'] = $params['color'];
        }

        list($ret, $msg) = $model->insertItem($info);
        if ($ret) {
            $this->ajaxSuccess('操作成功');
        } else {
            $this->ajaxFailed('服务器错误:', $msg);
        }
    }

    /**
     * 更新数据
     * @param $id
     * @param $params
     * @throws \Exception
     */
    public function update($params = [])
    {
        $id = null;
        if (isset($_GET['_target'][3])) {
            $id = (int)$_GET['_target'][3];
        }
        if (isset($_REQUEST['id'])) {
            $id = (int)$_REQUEST['id'];
        }
        if (!$id) {
            $this->ajaxFailed('参数错误', 'id不能为空');
        }

        $errorMsg = [];
        if (empty($params)) {
            $this->ajaxFailed('错误', '没有提交表单数据');
        }

        if (!isset($params['name']) || empty($params['name'])) {
            $errorMsg['name'] = '名称不能为空';
        }

        $id = (int)$id;
        $model = new IssueStatusModel();
        $row = $model->getByName($params['name']);
        if (isset($row['id']) && ($row['id'] != $id)) {
            $errorMsg['name'] = '名称已经被使用';
        }
        unset($row);

        if (!empty($errorMsg)) {
            $this->ajaxFailed('参数错误', $errorMsg, BaseCtrl::AJAX_FAILED_TYPE_FORM_ERROR);
        }

        $info = [];
        $info['name'] = $params['name'];
        if (isset($params['description'])) {
            $info['description'] = $params['description'];
        }
        if (isset($params['font_awesome'])) {
            $info['font_awesome'] = $params['font_awesome'];
        }
        if (isset($params['color'])) {
            $info['color'] = $params['color'];
        }
        if (isset($params['sequence'])) {
            $info['sequence'] = (int)$params['sequence'];
        }
        $ret = $model->updateItem($id, $info);
        if ($ret) {
            $this->ajaxSuccess('操作成功');
        } else {
            $this->ajaxFailed('服务器错误', '更新操作失败');
        }
    }

    /**
     * 删除数据
     * @param $id
     * @throws \Exception
     */
    public function delete($id)
    {
        $id = null;
        if (isset($_GET['_target'][3])) {
            $id = (int)$_GET['_target'][3];
        }
        if (isset($_REQUEST['id'])) {
            $id = (int)$_REQUEST['id'];
        }
        if (!$id) {
            $this->ajaxFailed('参数错误', 'id不能为空');
        }
        $model = new IssueStatusModel();
        $ret = $model->deleteItem($id);
        if (!$ret) {
            $this->ajaxFailed('服务器错误', '删除操作失败了');
        } else {
            $this->ajaxSuccess('操作成功');
        }
    }
}
