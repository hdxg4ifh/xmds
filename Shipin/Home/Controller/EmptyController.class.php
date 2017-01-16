<?php
namespace Home\Controller;

class EmptyController extends IndexController {
    public function __construct()
    {
        redirect(U('index/index'));
    }
    public function index()
    {
        redirect(U('index/index'));
    }
}
