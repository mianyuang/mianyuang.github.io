---
title: mysql
date: 2022-09-13 19:18:35
categories: 数据库
tags:
---
# Maven
## **窗口函数**

窗口函数的作用类似于子查询中对数据进行分组，不同的是，分组操作会把分组的结果聚合成一条记录，而窗口函数是将结果置于每一条数据记录中。

## **窗口函数分类**

可分为静态窗口函数和动态窗口函数。

- 静态窗口函数的窗口大小是固定的，不会因为记录的不同而不同
- 动态窗口函数的窗口大小会随着记录的不同而变化。

窗口函数总体上可以分为序号函数、分布函数、前后函数、首尾函数和其他函数，如下表：

![](https://secure2.wostatic.cn/static/chjaKv7iv2haE7yWse8qVW/截屏2022-07-10 22.52.46.png?auth_key=1676450194-bv6zqSGZ5Aerx1d9GSHhJ3-0-e2326827ed80307cdeffbd921a613309)



## **语法结构**

```SQL
函数 OVER （[PARTTITION BY 字段名 ORDER BY 字段名 ASC｜DESC]）
```

或者是

```SQL
函数 OVER 窗口名 ....WINDOW 窗口名 AS（[PARTTITION BY 字段名 ORDER BY 字段名 ASC｜DESC]）
```

- OVER关键字指定函数窗口的范围
    - 如果省略后面括号的内容，则窗口会包含满足where条件的所有记录，窗口函数会基于所有满足WHERE条件的记录进行计算
    - 如果OVER关键字后面的括号不为空，则可以使用如下语法设置窗口。
- 窗口名：为窗口设置一个别名，用来标识窗口
- PARTITION BY 子句：指定窗口函数按照哪些字段进行分组。分组后，窗口函数可以在每个分组分别执行。
- ORDER BY 子句：指定窗口函数按照哪些字段进行排序。执行排序操作使窗口函数按照排序后的数据记录的顺序进行编号
- FRAME 子句：为分区中的某个子集定义规则，可以用来作为滑动窗口使用。

## **分类讲解**

### **序号函数：**

1. ROW_NUMBER函数：

    ![](https://secure2.wostatic.cn/static/oz1QzhRFtiKQu5PfcYBkqz/image.png?auth_key=1676450194-a4kNnLqdMq74GPAMXSpQ9U-0-575cb013698d619b8d622bf74651ac5c)
2. RANK函数：

    ![](https://secure2.wostatic.cn/static/tkp2z9SnrjbdrFqQFRZtQt/image.png?auth_key=1676450194-xbHoot1p5gLKh6Z7NJ8iJr-0-282d1f2e77292bf938ef2e4ad75c383d)
3. DENSE_RANK函数和RANK函数相反。

### **分布函数**

1. PERCENT_RANK函数：

    此函数是等级值百分比函数，按照公式$(rank - 1) / (rows - 1)$来计算。

    其中rank的值为使用RANK函数产生的序号，rows值为当前窗口的总记录数。

    ![](https://secure2.wostatic.cn/static/kwMHvXSpN5n3W2H9Parohp/image.png?auth_key=1676450194-o4RKjmyANuWcrJ3XZV4rAi-0-59645b67817f06fd6db7d3c5a0a84f60)
2. CUME_DIST函数:

    此函数主要用于查询小于或等于某个值的比例

    ![](https://secure2.wostatic.cn/static/cfDBMSxkHkJoJ6r84or7zj/image.png?auth_key=1676450194-87bEyWcxRkgUT6ftZqgZCb-0-840578937ea2886ad0910747ed461b1c)

### **前后函数**

1. LAG(expr,n)函数：

    LAG(expr,n)函数返回当前行的前n行的expr值。

    ![](https://secure2.wostatic.cn/static/a99hCKYsKQm2YckxYFCpjN/image.png?auth_key=1676450194-neyQLVCuxTrET6CFRW66bp-0-8136eea492feb34fd33d778b7ae3edb6)
2. LEAD(expr,n)函数：

    LEAD(expr,n)函数返回当前行的后n行的expr的值。

    ![](https://secure2.wostatic.cn/static/anpu5HVe2GEtWpTz41zi1G/image.png?auth_key=1676450194-9ewSkB5oJVH6opA67GGAA9-0-accbf3520887c003a7e4a80cde7d3e68)

### **首尾函数**

1. FIRST_VALUE(expr)函数

    FIRST_VALUE(expr)函数返回第一个expr的值。

    ![](https://secure2.wostatic.cn/static/qb8H52QvXWDzNhuR1x7DrN/image.png?auth_key=1676450194-ghHUUPDfV27yLpCTJG8d9K-0-6cb2967ab0718cf549d7de21a18f859b)
2. LAST_VALUE(expr)函数：返回最后一个expr的值。

### **其他函数**

1. NTH_VALUE(expr，n)函数：

    NTH_VALUE(expr，n)函数返回第n个expr的值

    ![](https://secure2.wostatic.cn/static/vVTfUgtkc1BCdG9VbZEjdn/image.png?auth_key=1676450194-cy1MAPBWMJFj9xj8r6WUAC-0-702898fa3c446341a243014af5e33fe8)
2. NTILE(n)函数：

    将分区中的有序数据分为n个桶，记录桶编号

    ![](https://secure2.wostatic.cn/static/cxbhKyrzq1csHbdnp29qZw/image.png?auth_key=1676450194-8GhBXt4vkyezHNxmqUk79B-0-a956d2b544ca75bbb19099c1ad5bddd0)

