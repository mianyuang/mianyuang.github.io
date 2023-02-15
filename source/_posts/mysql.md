---
title: mysql
date: 2022-09-13 19:18:35
categories: 数据库
tags:
---
# MYSQL8新特性

## 窗口函数

窗口函数的作用类似于子查询中对数据进行分组，不同的是，分组操作会把分组的结果聚合成一条记录，而窗口函数是将结果置于每一条数据记录中。

## 窗口函数分类

可分为静态窗口函数和动态窗口函数。

-   静态窗口函数的窗口大小是固定的，不会因为记录的不同而不同
-   动态窗口函数的窗口大小会随着记录的不同而变化。

窗口函数总体上可以分为序号函数、分布函数、前后函数、首尾函数和其他函数，如下表：

![](image_naPtBYf8Gz.png)

## 语法结构

```sql
函数 OVER （[PARTTITION BY 字段名 ORDER BY 字段名 ASC｜DESC]）
```

或者是

```sql
函数 OVER 窗口名 ....WINDOW 窗口名 AS（[PARTTITION BY 字段名 ORDER BY 字段名 ASC｜DESC]）
```

-   OVER关键字指定函数窗口的范围
    -   如果省略后面括号的内容，则窗口会包含满足where条件的所有记录，窗口函数会基于所有满足WHERE条件的记录进行计算
    -   如果OVER关键字后面的括号不为空，则可以使用如下语法设置窗口。
-   窗口名：为窗口设置一个别名，用来标识窗口
-   PARTITION BY 子句：指定窗口函数按照哪些字段进行分组。分组后，窗口函数可以在每个分组分别执行。
-   ORDER BY 子句：指定窗口函数按照哪些字段进行排序。执行排序操作使窗口函数按照排序后的数据记录的顺序进行编号
-   FRAME 子句：为分区中的某个子集定义规则，可以用来作为滑动窗口使用。

## 分类讲解

### 序号函数：

1.  ROW\_NUMBER函数：

    ![](image_lLvr4-3LF9.png)
2.  RANK函数：

    ![](image_vastdTbnm0.png)
3.  DENSE\_RANK函数和RANK函数相反。

### 分布函数

1.  PERCENT\_RANK函数：

    此函数是等级值百分比函数，按照公式$(rank - 1) / (rows - 1)$来计算。

    其中rank的值为使用RANK函数产生的序号，rows值为当前窗口的总记录数。

    ![](image_7iIAJ0-Boa.png)
2.  CUME\_DIST函数:

    此函数主要用于查询小于或等于某个值的比例

    ![](image_TT0OB4ZKgE.png)

### 前后函数

1.  LAG(expr,n)函数：

    LAG(expr,n)函数返回当前行的前n行的expr值。

    ![](image_XZX5vJYxMF.png)
2.  LEAD(expr,n)函数：

    LEAD(expr,n)函数返回当前行的后n行的expr的值。

    ![](image_nXIhR2yQ5S.png)

### 首尾函数

1.  FIRST\_VALUE(expr)函数

    FIRST\_VALUE(expr)函数返回第一个expr的值。

    ![](image_ZKws6uAGXI.png)
2.  LAST\_VALUE(expr)函数：返回最后一个expr的值。

### 其他函数

1.  NTH\_VALUE(expr，n)函数：

    NTH\_VALUE(expr，n)函数返回第n个expr的值

    ![](image_72js3ghBW3.png)
2.  NTILE(n)函数：

    将分区中的有序数据分为n个桶，记录桶编号

    ![](image_YqqFsD-gJB.png)

# 字符集的相关操作

## 修改Mysql5.7字符集

在mysql8之前，默认字符集为`latin1`，utf8字符集指向的是`utf8mb3`，网站开发人员在数据库设计时往往会将编码修改为utf8。如果遗忘修改默认的编码，就会出现乱码的问题。从mysql8开始，数据库默认的编码就是utf8mb4，从而避免上述乱码的问题。

操作1：查看默认使用的字符集

```sql
show variables like 'character%';
或者
show variables like '%char%';
```

操作2：修改my.cnf配置文件，在配置文件中指定字符集

```sql
character_set_server=utf8
```

![](截屏2022-07-18 22.28.45_bhV525pXqp.png)

## 已有库已有表字符集的变更

mysql5.7版本中，以前创建的库，创建的表字符集还是latin1。

操作1：修改已有数据库的字符集

```sql
alter database 数据库名 character set 'utf8';
```

操作2：修改已有表的字符集

```sql
alter table 表名 convert to character set 'utf8';
```

## 各级别的字符集（底层原理说明）

mysql有4个级别的字符集和比较规则，分别是：

-   服务器级别
-   数据库级别
-   表级别
-   列级别

![](截屏2022-07-18 22.28.45_bhV525pXqp.png)

-   character\_set\_server：服务器级别的字符集
-   character\_set\_database：当前数据库的字符集
-   character\_set\_client：服务器解码请求时使用的字符集
-   character\_set\_connection：服务器处理请求时会把请求字符串从character\_set\_client转为character\_set\_connection
-   character\_set\_result：服务器向客户端返回数据时使用的字符集

设置server服务器级别的字符集后，相应的database字符集也会跟着变化。

-   当创建数据库时，不指定字符集，则使用database指定的字符集
-   当创建表时不指定字符集，则会根据所在库的字符集默认指定
-   当创建字段不指定字符集时，则会根据所在表的字符集默认指定

## 字符集与比较规则

### utf8与utf8mb4

utf8字符集表示一个字符需要使用1-4个字节，但是常使用的字符使用1-3个字节就可以表示了。而字符集表示一个字符所用到的最大字节长度，在某些方面会影响系统的存储和性能，所以定义了两个概念：

utf8mb3：阉割的utf8字符集，只使用1-3个字节表示字符。

utf8mb4：正宗的utf8字符集，使用1-4个字节表示字符。

查看mysql支持的字符集命令：show charset；

![](截屏2022-07-18 22.59.05_TJ24gtyOI7.png)

### 比较规则

Mysql一共支持41种字符集，其中的`Default collation`表示这些字符集中一种默认的比较规则，里面包含着该比较规则主要作用于哪种语言。如`utf8_polish_ci`表示以波兰语的规则比较，`utf8_general_ci`是一种通用的比较规则。

后缀表示该比较规则是否区分语言中的重音、大小写。具体如下：

![](截屏2022-07-18 23.03.26_1Mg_DVC-cB.png)

常用操作：

```sql
#查看GBK字符集的比较规则
show COLLATION LIKE 'gbk%';
#查看服务器的字符集和比较规则
show VARIABLES LIKE '%_server';
#查看数据库的字符集和比较规则
show VARIABLES DATABASE LIKE '%_database';
#查看具体数据库的字符集
show CREATE DATABASE 数据库名;
#修改数据库的字符集
ALTER DATABASE 数据库名 DEFAULT CHARACTER SET 'utf8' COLLATE 'utf8_general_ci';
#查看具体表的字符集
show CREATE TABLE 表名;
#修改表的字符集
ALTER TABLE 数据库名 DEFAULT CHARACTER SET 'utf8' COLLATE 'utf8_general_ci';

```

## 请求到相应过程中的编码

客户端请求mysql服务器时使用utf8编码，服务器使用character\_set\_client设置的字符集进行解码，在使用character\_set\_connection设置的字符集把character\_set\_client解码的内容编码到数据库中去查询，查询结果后在使用character\_set\_result设置的字符集编码返回给客户端，客户端在解码。

所以要求设置的编码必须要一致，可以添加如下配置到配置文件里可以指定character\_set\_client、character\_set\_connection、character\_set\_result三者的字符集。

```sql
[client]
default-character-set=utf8
```

## SQL大小写规范与sql\_mode的设置

### 查看大小写设置命令

```sql
show variables like 'lower_case_table_names';

```

![](截屏2022-07-18 23.31.06_PrFtsx8UW7.png)

lower\_case\_table\_names参数值的设置：

-   默认为0，大小写敏感
-   设置1，大小写不敏感。创建的表，数据库都是以小写的形式存在磁盘上，对于SQL语句都是转换为小写对表和数据库进行查找。
-   设置为2，创建的表和数据库依据语句上格式存放，凡是查找都是转换为小写进行。

### Linux下大小写规则设置

当想设置大小写不敏感时，要在`my.cnf`配置文件中\[mysqld]中加入`lower_case_table_names=1`，然后重启服务器。

-   但是要在重启数据库实例之前就需要将原来的数据库和表转换为小写，否则将找不到数据库名。
-   此参数适用于MYSQL5.7，在Mysql8下禁止在重新启动Mysql服务时将`lower_case_table_names`设置成不同于初始化mysql服务时设置的`lower_case_table_names`值。如果非要将mysql8是设置为大小写不敏感，具体步骤为：
    1.  停止mysql服务
    2.  删除数据目录，即删除/var/lib/mysql目录
    3.  在配置文件中添加`lower_case_table_names`=1
    4.  重新启动mysql服务

### SQL编写建议

![](截屏2022-07-18 23.42.27_MT0bejDC3j.png)

## sql\_mode的设置

sql\_mode会影响mysql支持的sql语法以及它执行的数据验证检查。通过设置mysql\_mode可以完成不同严格程度的数据校验，有效的保证数据准确性。

MYSQL服务器可以在不同的SQL模式下运行，并且可以针对不同的客户端以不同的方式应用这些模式，具体取决于sql\_mode系统变量的值。

mysql5.6和5.7默认的sql\_mode模式参数是不一样的：

-   5.6的mode默认值为空（即：NO\_ENGINE\_SUBSTITUTION），其实表示的是一个空值，相当于没有什么模式设置，可以理解为**宽松模式**。在这种设置下是可以允许一些非法操作的，比如允许一些非法数据的插入。
-   5.7的mode是STRICT\_TRANS\_TANLES，也就是**严格模式**，用于进行数据的严格校验，错误数据不能插入，报error错误，并且回滚事务。

### 宽松模式vs严格模式

-   宽松模式

    如果设置的是宽松模式，那么在插入数据时，即使给了一个错误的数据，也可能会被接受，并且不会报错。

    如：表中有一个name字段，类型为char（10），在插入数据时长度超过了10，例如‘1234567890abc’，超过了设定的长度，但不会报错，并且取前10个字符存上，也就是被存入了1234567890，abc忽略了。这就是宽松模式。
-   严格模式

    严格模式上面的情况出现就会报错。

### 模式的查看和设置

```sql
select @@session.sql_mode
select @@global.sql_mode
#或者
show variables like 'sql_mode';
#设置sql_mode模式
#session只在当前会话中生效，关闭当前会话就不生效了。
SET SESSION sql_mode = 想要的模式
#GLOBLA在当前服务生效，重启mysql服务后失效。
SET GLOBAL sql_mode = 想要的模式
#永久设置方式
在my.cnf配置文件中配置sql_mode
[mysqld]
sql_mode = 想要的模式,可以选择多个模式，多个模式使用，分割。
```

### 常用模式

![](截屏2022-07-19 00.16.38__G9svxLals.png)

