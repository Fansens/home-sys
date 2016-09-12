package net.wildcrab.common.sql;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.Resource;

/**
 * SqlDao
 *
 * @author fansensen
 * @version 1.0
 * @create 2016/9/12 16:19
 * @description:
 */
public class SqlDao {
    /**
     * 日志
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(SqlDao.class);

    @Resource
    private SqlSessionTemplate SqlSession;


}
