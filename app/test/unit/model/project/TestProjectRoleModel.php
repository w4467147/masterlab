<?php

namespace main\app\test\unit\model\project;
use main\app\model\project\ProjectModel;
use main\app\test\BaseDataProvider;

/**
 * 项目拥有的角色 模型
 */
class TestProjectRoleModel extends TestBaseProjectModel
{

    public static $projectData = [];

    public static function setUpBeforeClass()
    {
        self::$projectData = self::initProject();
    }

    public static function tearDownAfterClass()
    {
        self::clearData();
    }

    public static function clearData()
    {
        $model = new ProjectModel();
        $model->deleteById(self::$projectData['id']);

    }

    public static function initProject($info = [])
    {
        $row = BaseDataProvider::createProject($info);
        return $row;
    }

    /**
     * 获取某个角色信息
     * @param $id
     * @return array
     */
    public function testGetById()
    {
        $this->markTestIncomplete( 'TODO:' . __METHOD__  );
    }

    public function testGetByName()
    {
        $this->markTestIncomplete( 'TODO:' . __METHOD__  );
    }

    /**
     * 返回所有角色信息
     * @return array
     */
    public function testGetsAll()
    {
        $this->markTestIncomplete( 'TODO:' . __METHOD__  );
    }

    /**
     * 获取某个项目的所有角色
     * @return array
     */
    public function testGetsByProject()
    {
        $this->markTestIncomplete( 'TODO:' . __METHOD__  );
    }
}