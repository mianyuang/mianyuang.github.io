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

![](截屏2022-07-10 22.52.46_naPtBYf8Gz.png)

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
