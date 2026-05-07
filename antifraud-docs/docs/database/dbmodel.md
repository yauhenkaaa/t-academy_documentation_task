---
title: Модель данных
sidebar_position: 1
hide_table_of_contents: false

---
import Drawio from '@theme/Drawio'
import diagram from '!!raw-loader!./dbmodel.drawio';

<Drawio content={diagram} editable={false} />
# Модель данных

## Описание сущностей

### 1. User (Пользователь)
Хранит информацию об аккаунте и настройках доступа.
| Поле | Тип | Описание |
| :--- | :--- | :--- |
| id | UUID | Первичный ключ |
| username | VARCHAR | Имя пользователя |
| role | ENUM | Роль (USER, GROUP_MEMBER, ADMIN) |

### 2. Call (Информация о звонке)
Центральная сущность для анализа угроз.
| Поле | Тип | Описание |
| :--- | :--- | :--- |
| id | UUID | Первичный ключ |
| user_id | UUID | Внешний ключ (User) |
| status | ENUM | Статус (PENDING, ANALYZING, BLOCKED) |
| analysis_result | JSONB | Результаты ML-анализа |

### 3. Whitelist_Entry (Белый список)
| Поле | Тип | Описание |
| :--- | :--- | :--- |
| id | UUID | Первичный ключ |
| phone_number | VARCHAR | Номер телефона |
| apply_to_group | BOOLEAN | Флаг применения к группе |