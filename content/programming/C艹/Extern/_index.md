+++
alwaysopen = false
title = "C++与C中extern的异同"
description = "extern"
categories = ["Programming"]
tags = ["C++","C"]
weight = 1
draft = false
+++
<p align="right">2026-06-21   01:50:12</p>

`extern` 关键字在 C 和 C++ 中的根本使命一致：声明一个具有外部链接的变量或函数，指出"此符号定义在别处"。

## 共同点

### 声明与定义分离

`extern int x;` 仅是声明，不分配存储；若带初始化（如 `extern int x = 1;`）则为定义。

### 函数默认 `extern`

`extern void f();` 与 `void f();` 等效。

### 块作用域引用

函数内可用 `extern` 声明引入全局变量。

### 允许多次声明

同一变量可有多个 `extern` 声明，只要类型一致且无多重定义。

## 核心差异

### 语言链接规范（extern \"C\"）

-   C++：可用 `extern "C"` 指定 C 链接规则（无名字修饰），实现 C/C++ 互调。

-   C：无此概念。

<!-- -->

        extern "C" {
            void c_func(int);
            int  c_var;
        }

### const 全局变量的默认链接属性

-   C：文件作用域 `const` 变量默认外部链接。

-   C++：文件作用域 `const` 变量默认内部链接（如同 `static`）。跨文件共享必须显式加 `extern` 定义。

C 示例：

        /* file1.c */
        const int N = 100;   /* 外部链接 */
        
        /* file2.c */
        extern const int N;  /* 正确 */

C++ 示例：

        // file1.cpp
        extern const int N = 100; // 外部链接
        
        // file2.cpp
        extern const int N;       // 引用

### 暂定定义与 ODR

-   C：文件作用域无初始化、无 `extern` 的声明是"暂定定义"。允许重复，最终合并为一个（初值0）。

-   C++：严格执行一次定义规则（ODR），所有不带 `extern` 的变量声明即定义，重复则错误。跨文件共享必须在一个文件定义，其他文件用 `extern` 声明。

C 示例：

        int a;   // 暂定定义
        int a;   // 合法

### 模板显式实例化声明（C++ 独有）

C++11 引入 `extern template`，用于抑制隐式实例化，C 无此用法。

        extern template class std::vector<int>;

### inline 函数与 extern

-   C99：`inline` 函数默认不提供外部可链接定义。如需外部符号，用 `extern inline` 声明或另提供外部定义。

-   C++：`inline` 函数默认具有外部链接，所有相同定义合并为一份，无需 `extern`。

C99 示例：

        inline void f(void) { /* 仅内联 */ }
        extern inline void f(void); // 请求外部符号

## 总结


| 特性                    | C                              | C++                                 |
|-------------------------|--------------------------------|-------------------------------------|
| 基本语义                | 声明外部链接符号               | 同 C                                |
| `extern "C"`            | 不支持                         | 支持                                |
| `const` 全局默认链接    | 外部链接                       | 内部链接，共享需 `extern const` 定义|
| 暂定定义                | 允许                           | 禁止（严格 ODR）                    |
| `extern template`       | 无                             | 有                                  |
| `inline` 外部可见性     | 默认不可见，需 `extern inline` | 默认可见                            |

## 实践准则 {#实践准则 .unnumbered}

-   头文件中 `extern` 声明变量，单源文件中定义。

-   C++ 跨文件共享 `const` 常量：`extern const int x = ...;`。

-   混合编程时，C++ 方用 `extern "C"` 包裹 C 函数声明。

-   避免依赖默认链接属性或暂定定义，显式标注 `extern` 或 `static`。



