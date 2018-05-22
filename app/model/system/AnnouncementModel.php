<?php

namespace main\app\model\system;

use main\app\model\BaseDictionaryModel;

/**
 *  系统自带的字段
 *
 */
class AnnouncementModel extends BaseDictionaryModel
{
    public $prefix = 'main_';

    public $table = 'annoument';

    const   DATA_KEY = 'main_annoument/';

    public $fields = '*';

    /**
     * 用于实现单例模式
     * @var self
     */
    protected static $instance;

    /**
     * 创建一个自身的单例对象
     * @param bool $persistent
     * @throws PDOException
     * @return self
     */
    public static function getInstance($persistent = false)
    {
        $index = intval($persistent);
        if (!isset(self::$instance[$index]) || !is_object(self::$instance[$index])) {
            self::$instance[$index]  = new self($persistent);
        }
        return self::$instance[$index] ;
    }

    public function release($content, $expire_time)
    {

        $info = [];
        $info['id'] = 1;
        $info['content'] = $content;
        $info['expire_time'] = time() + $expire_time * 60;
        $info['status'] = 1;

        $this->replace($info);
    }

    public function disable()
    {

        $info = [];
        $info['status'] = 2;

        $condition = [];
        $condition['id'] = 1;
        $this->update($info, $condition);
    }

}