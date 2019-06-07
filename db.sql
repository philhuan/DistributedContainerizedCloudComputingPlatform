drop database if exists dcccp;
create database dcccp;
use dcccp;

CREATE TABLE `container` (
  `cid` int(11) NOT NULL AUTO_INCREMENT COMMENT '容器id',
  `mip` varchar(25) NOT NULL COMMENT '容器ip',
  `pip` varchar(25) NOT NULL COMMENT '宿主机ip',
  `port` int(6) NOT NULL COMMENT '端口',
  `cstate` int(2) NOT NULL COMMENT '状态 1.等待 2.计算中',
  PRIMARY KEY (`cid`)
) DEFAULT CHARSET=utf8 COMMENT='容器表';

CREATE TABLE `flow` (
  `fid` int(11) NOT NULL AUTO_INCREMENT COMMENT '流程id',
  `cid` int(11) NOT NULL COMMENT '容器id',
  `param` varchar(200) NOT NULL COMMENT '参数',
  `result` varchar(50) NOT NULL COMMENT '结果',
  `lable` varchar(200) NOT NULL COMMENT '标签',
  `fstate` int(2) NOT NULL COMMENT '状态 1.计算中 2.计算完成',
  PRIMARY KEY (`fid`)
) DEFAULT CHARSET=utf8 COMMENT='计算流程表';


INSERT INTO container(mip,pip,port,cstate)
VALUES ('192.168.1.25','192.168.1.47',5632,1);

INSERT INTO container(mip,pip,port,cstate)
VALUES ('192.168.1.26','192.168.1.47',5542,2);

INSERT INTO container(mip,pip,port,cstate)
VALUES ('192.168.1.27','192.168.1.47',12345,3);

INSERT INTO flow(cid,param,result,lable,fstate)
VALUES (1,'1,2,3,4,5,6,7,8,9','25.3256','大脚优化',1);

INSERT INTO flow(cid,param,result,lable,fstate)
VALUES (2,'1,2,3,4,5,6,7,8,9','5.203256','大脚优化',2);

INSERT INTO flow(cid,param,result,lable,fstate)
VALUES (1,'32，43，45，66，5，4','21.36256','大脚优化',3);