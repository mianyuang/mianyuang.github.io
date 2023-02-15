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

![](image_bhV525pXqp.png)

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

![](image_bhV525pXqp.png)

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

![](image_TJ24gtyOI7.png)

### 比较规则

Mysql一共支持41种字符集，其中的`Default collation`表示这些字符集中一种默认的比较规则，里面包含着该比较规则主要作用于哪种语言。如`utf8_polish_ci`表示以波兰语的规则比较，`utf8_general_ci`是一种通用的比较规则。

后缀表示该比较规则是否区分语言中的重音、大小写。具体如下：

![](image_1Mg_DVC-cB.png)

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

![](image_PrFtsx8UW7.png)

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

![](image_MT0bejDC3j.png)

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

![](image__G9svxLals.png)

# 数据库和文件系统的关系

像InnoDB、MyISAM这样的存储引擎都是把表存储在磁盘上的，操作系统用来管理磁盘的结构被称为文件系统，所以用专业一点的话来表示就是：像InnoDB、MyISAM这样的存储引擎都是把表存储在文件系统上的，`读取数据`时，`存储引擎`会把数据从文件系统中读取出来返回，`写入数据`时，存储引擎会把数据`写到文件系统去`。

## 表在文件系统中的表示

### InnoDB存储引擎模式

#### 在5.6.6版本之前

进入mysql数据存储目录`data`下

![](image_zFLAvRLKGv.png)

数据库表的数据都存放在`ibdata1`（称为系统表空间）中，进入创建的`testdb`数据库，可以看到：

![](image_MOB3JvcFmc.png)

有三个文件：

-   `db.opt`存放的是创建数据库时数据库的配置信息
-   `__.frm`文件存放的是创建表的结构
-   `__.ibd`文件存放的是表的数据（也称为独立表空间）5.6.6之前的版本应该是无。

#### 在5.7版本

![](image_zFLAvRLKGv.png)

数据库表的数据可以选择存放在`ibdata1`（称为系统表空间）中，进入创建的`testdb`数据库，可以看到：

![](image_MOB3JvcFmc.png)

有三个文件：

-   `db.opt`存放的是创建数据库时数据库的配置信息
-   `__.frm`文件存放的是创建表的结构
-   `__.ibd`文件存放的是表的数据（也称为独立表空间）。

#### 在8版本

![](image_zI0c41ME4U.png)

数据库表的数据可以选择存放在`ibdata1`（称为系统表空间）中，进入创建的`testdb`数据库，可以看到：

![](image_XQQJqu48ta.png)

不同于5.7版本，现在只有一个`__.ibd`（独立表空间）文件，不止是存放数据，把表结构也都放入该文件中。

> 储备知识：
>
> -   InnoDB其实是使用`页`作为基本单位来管理存储空间的，默认页的大小为16kb。
> -   对于InnoDB存储引擎来说，每个索引都对应着一颗B+树，该B+树的每个节点都是一个数据页，数据页之间不必要是物理连续的，因为数据页之间有`双向链表`来维护这些页的顺序
> -   InnoDB的聚簇索引的叶子节点存储了完整的用户记录，也就是所谓的索引即数据，数据即索引。

为了更好的管理这些页，InnoDB提出了一个`表空间`或者`文件空间`概念。这个表空间是一个抽象的概念，它可以对应文件系统上一个或多个真实文件（不同表空间对应的文件数量可能不同）。每一个表空间都可以被划分为很多`页`，我们的表数据就存放在某个表空间的某些页里。

表空间有几种个不同的类型：

#### 系统表空间

默认情况下，InnoDB会在数据目录下创建一个名为`ibdata1`，大小为12M的文件，这个文件就是对应的`系统表空间`，该文件是`自拓展文件`，当不够用时会自动增加文件大小。

如果想让系统表空间对应文件系统上多个实际文件，那么可以在mysql启动配置对应的文件路径以及它们的大小。

修改my.cnf配置文件：

```sql
[server]
innodb_data_file_path=data1:512M;data2:512M:autoextend
```

这样在mysql启动时就会创建这两个大小为512M大小的文件作为系统表空间，其中`autoextend`表明文件不够用时会自动拓展`data2`文件的大小。

需要注意的一点是：`在一个MYSQL服务器中，系统表空间只有一份。`从MYSQL5.5.7到5.6.6之间的各个版本中，我们**表中的数据都会被默认存储到这个系统表空间。**

#### 独立表空间

在mysql5.6.6之后的版本中，InnoDB并不会默认把各个表的数据存储到系统表空间中，而是`为每一个表创建一个独立表空间`，也就是创建了多少个表，就有多少个独立表空间。使用独立表空间来存储数据，会在该表所属的数据库对应的目录下创建一个表示该独立表空间的文件，文件名和表名相同，只不过添加了一个`.ibd`的拓展名而已。

#### 系统表空间与独立表空间的设置

可以指定使用`系统表空间`还是`独立表空间`来存储数据，这个功能由启动参数`innodb_file_per_table`控制。

```sql
[server]
innodb_file_per_table=0 #0代表使用系统表空间 1代表使用独立表空间
```

#### 证明在mysql8中idb文件中存放了表的结构信息

需要解析ibd文件。可以使用orancle提供的一个应用程序ibd2sdi。在mysql8中不需要下载此程序，自带。到存储ibd文件的目录下，执行下面的命令：

```sql
ibd2sdi --dump-file=student.txt student.ibd
```

### MyISAM存储引擎模式

#### 表结构

在该存储引擎模式下，会在数据目录下对应的数据库目录下创建一个专门用来描述表结构的文件：表名`.frm`

#### 表中数据和索引

索引都是`二级索引`，数据和索引是分开存放的。所以在文件系统中也是使用不同的文件来存储数据文件和索引文件，同时表数据都存放在对应的数据库子目录下。 例如`test`表使用MyISAM存储引擎的话，在数据库中对应的目录小爱就会创建这三个文件：

```sql
test.frm 存储表结构 5.7版本是这个文件  test.sdi 8版本是这个文件
test.MYD 存储数据
test.MYI 存储索引
```

# 用户与权限管理

## 用户管理

MYSQL用户可以分为`普通用户`和`root用户`。root用户是超级管理员，拥有所有权限，包括创建用户、删除用户、和修改用户密码等管理权限；普通用户只拥有被授予的各种权限。

Mysql提供了许多语句来管理用户账号，这些语句可以用来登陆和退出Mysql服务器、创建用户、删除用户、密码管理和权限管理等内容。

**MYSQL数据库安全性需要通过账户管理来保证。**

### 登陆MYSQL服务器

```bash
mysql -h hostname | hostIP -p port -u username -p
```

### 创建用户

使用CREATE USER语句来创建新用户，**必须拥有CREATE USER权限**。每增加一个用户，都会往MYSQL.user表中添加一条记录，但**新创建的用户没有任何权限**。添加的账户已经存在，会返回一个错误。

语法格式如下：

用户名由用户(User)和主机名(Host)构成

```sql
CREATE USER 用户名 [IDENTIFIED BY '密码'][,用户名[IDENTIFIED BY '密码']]
CREATE USER 'zhangsan'@'localhost' IDENTIFIED BY '123456';

```

### 修改用户

修改用户名：

```sql
UPDATE mysql.user set USER='li4' WHERE USER='wang5';

//在刷新一下 不然之前的没修改的账户还能登陆
FLUSH PRIVILEGES;
```

### 删除用户

使用`DROP USER`语句来删除`普通用户`，也可以直接在mysql.user表中删除用户。

```sql
DROP USER 用户名
DROP USER 'lisi'@'%';
```

### 设置当前用户密码

适用于root用户修改自己的密码，以及普通用户登陆后修改自己的密码。

推荐使用`ALTER USER`修改用户密码

旧的写法：

```sql
SET PASSWORD = PASSWORD('123456');
```

推荐写法：

使用ALTER命令来修改自身密码，如下命令修改当前登陆用户的密码。

```sql
#ALTER USER写法
ALTER USER USER(用户) IDENTIFIED BY ‘新密码’；

```

使用SET语句来修改当前用户密码

使用root用户登陆后，可以使用SET语句来修改密码，如下：

```sql
SET PASSWORD = ‘新密码’
```

### 修改其他用户的密码

root用户不仅可以修改自己的密码，还可以修改其他普通用户的密码。root登陆mysql服务器后，可以通过ALTER语句和SET语句来修改普通用户的密码。

-   使用ALTER语句来修改普通用户的密码
    ```sql
    ALTER USER user [IDENTIFIED BY ‘新密码’]
    例子如下：
    ALTER USER 'lisi'@'localhost' IDENTIFIED BY 'hello';
    ```
-   使用SET命令来修改普通用户密码
    ```sql
    SET PASSWORD FOR 'username'@'hostname'='新密码'
    ```

## 权限管理

查看mysql所有权限。

```sql
show privileges;
```

-   CREATE和DROP权限，可以创建新的数据库和表，或删除已有的数据库和表。
-   SELECT、ISNERT、UPDATE、DELETE权限允许在一个数据库现有的表上实施操作。
-   SELECT权限只有在它们真正从一个表中检索行时才被用到。
-   INDEX权限允许创建或删除索引，INDEX适用于已有的表。
-   ALTER权限可以使用ALTER TABLE来更改表的结构和重新命名表。
-   CREATE ROUTINE权限用来创建保存的程序（函数和程序）ALTER ROUTINE权限用来更改和删除保存的程序，EXECUTE权限用于执行保存的程序。
-   GRANT权限允许授权给其他用户，可用于数据库、表和保存的程序。
-   FILE权限使用户可以使用LOAD DATA INFILE 和SELECT ...INTO OUTFILE语句读或写服务器上的文件，任何被授权FILE权限的用户都能读或者写MYSQL服务器上的任何文件。

    ![](image_ZCOiPtq6fG.png)

    **授予权限原则**
    1.  只授予能满足需要的最小权限，防止用户干坏事。比如用户只是需要查询，那就只给select权限就可以了。
    2.  创建用户的时候限制用户的登录主机，一般是限制成指定Ip或者内网IP段。
    3.  为每个用户设置满足密码复杂度的密码。
    4.  定期清理不需要的用户，回收权限或者删除用户。
        **授予权限**
    给用户授予权限有两种方式，分别是通过把`角色赋予用户给用户授权`和`直接给用户授权`。

    授权命令：
    ```sql
    GRANT 权限1.....权限n ON 数据库名称.表名称 TO 用户名@用户地址 [IDENTIFIED BY '密码口令'];
    例子：
    给li4用户授予test库下所有表的CRUD权限
    GRANT SELECT,INSERT,DELETE,UPDATE ON TEST.* TO li4@localhost;
    授予joe用户对所有库所有表的全部权限，不包括grant权限。
    GRANT ALL PRIVILEGES ON *.* TO joe@'%';
    ```
    **查看权限**
    -   查看当前用户权限
        ```sql
        SHOW GRANTS;
        SHOW GRANTS FOR CURRENT_USER;
        SHOW GRANTS FOR CURRENT_USER();

        ```
    -   查看某用户的全局权限
        ```sql
        SHOW GRANTS FOR ‘user’@'主机地址';
        ```
    **收回权限**

    使用REVOKE语句来收回权限。

    收回权限命令
    ```sql
    REVOKE 权限1.....权限n ON 数据库名.表名 FROM 用户名@用户地址;
    ```

## 权限表

MYSQL通过`权限表来控制用户对数据库的访问`，权限表放在mysql数据库中。mysql数据库系统会根据这些权限表的内容为每个用户赋予相应的权限。这些权限表中最重要的是user表、db表。除此之外，还有table\_priv表、collumn\_priv表和proc\_priv表。在Mysql启动时，服务器将这些数据库表中权限信息的内容读人内存。

# 角色管理

角色是在8版本引入的新功能。在MYSQL中，角色是权限的集合，可以为角色添加或移除权限。用户可以被赋予角色，同时也被授予角色包含的权限。对角色进行操作需要较高的权限。并且像账户一样，角色可以拥有授予和撤销的权限。

## 角色创建

使用CREATE ROLE语句，创建角色

```sql
CREATE ROLE 'role_name'[@'host_name'] [,'role_name'[@'host_name']]

```

角色名称规则和用户类似，如果host\_name省略，默认为"%"，role\_name不可省略。

## 角色赋予权限

语法格式如下：

```sql
GRANT privileges ON db_name.table_name TO 'role_name'[@'host_name'];
```

privileges代表权限的名称，多个权限以逗号隔开。可使用SHOW语句查询权限名称。SHOW PRIVILEGES\G命令

## 查看角色权限

语法格式如下：

```sql
SHOW GRANTS FOR '角色名';
```

## 回收角色权限

语法格式如下：

```sql
REVOKE privileges ON db_name.table_name FROM ‘rolename’；
例如:撤销school_write角色插入、查询、更新在school数据库所有表的权限。
REVOKE INSERT,SELECT,UPDATE ON school.* FROM 'school_write'@'localhost';
```

## 删除角色

语法格式：

```sql
DROP ROLE role ,[role2]....
```

## 给用户赋予角色

语法格式：

```sql
GRANT role,... TO user [,user2,...];

```

`role`代表角色，`user`代表用户。可以将多个角色同时赋予多个用户。

## 激活角色

**MYSQL创建了角色后，默认都是没有激活的**，也就是不能用的。必须要**手动激活才能使用**。用户才能拥有该角色的对应的权限。

-   激活方式1

    使用set default role 命令激活角色
    ```sql
    SET DEFAULT role 角色 ALL TO 用户
    举例：为下面4个用户默认激活所有已拥有的角色：
    SET DEFAULT role 'manager'@'localhost' ALL TO 'dev'@'localhost','dev1'@'%',...
    ```
-   激活方式2

    将activate\_all\_roles\_on\_login设置为ON
    ```sql
    SET GLOBAL activate_all_roles_on_login = ON；
    ```
    意思是对所有角色永久激活。运行这条语句后，用户才真正拥有了赋予角色的所有权限。

## 撤销用户的角色

语法格式：

```sql
REVOKE role FROM user；
举例：撤销admin用户read角色
REVOKE read FROM 'admin'@'localhost';
```

