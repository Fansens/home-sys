/******************************************************************************
 * Copyright (C) 2016 Wuhan Medical union Co.Ltd All Rights Reserved.
 * 本软件为武汉默联股份有限公司开发研制。 未经本公司正式书面同意，其他任何个人、
 * 团体不得使用、复制、修改或发布本软件.
 *****************************************************************************/
package net.wildcrab.auth.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * LoginController 
 * @author fansensen
 * @create 2016/9/21 17:29
 * @version 1.0
 * @description:
 */
@Controller
public class LoginController {
    /** 日志 */
    private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);

    @RequestMapping("/")
    public String login(){ return "index";}

    @RequestMapping("/hello")
    public String hello(){
        return "hello";
    }
}
