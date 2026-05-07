---
title: Архитектура
sidebar_position: 1
hide_table_of_contents: false
---

# Архитектура системы

### 1. C1 — Контекстная диаграмма
Показывает систему в окружении внешних участников и сервисов.

```plantuml
@startuml
actor "Пользователь" as user
actor "Администратор группы" as admin

rectangle "Anti-Fraud System" as antifraud {
}

rectangle "Банки / Финтех\n(внешний)" as banks
rectangle "Правоохранители\n(внешний)" as police
rectangle "Push Service\n(внешний)" as push

user --> antifraud : проверка звонков,\nмаркировка номеров
admin --> antifraud : управление группами,\nпросмотр статистики
antifraud --> banks : передача данных\nо мошеннических счетах
antifraud --> police : отчеты о мошенниках
antifraud --> push : отправка уведомлений
@enduml
```

### 2. C2 — Контейнерная диаграмма
Раскрывает внутренние компоненты системы и их взаимодействие.

```plantuml
@startuml
actor "Пользователь" as user

rectangle "Mobile App\n" as mobile
rectangle "Backend API\n[Python]" as backend
database "PostgreSQL\n[основное хранилище]" as db
rectangle "Redis\n[кэш, белый список]" as redis
rectangle "ML Engine\n[TensorFlow]" as ml
rectangle "ClickHouse\n[аналитика логов]" as logs

user --> mobile : HTTPS/gRPC
mobile --> backend : REST API / gRPC
backend --> db : SQL
backend --> redis : проверка белого списка
backend --> ml : анализ аудиопотока
backend --> logs : запись логов звонков
@enduml
```

### 3. Внешние зависимости
Таблица интеграций для вашего проекта:

| Сервис | Тип интеграции | Описание |
| :--- | :--- | :--- |
| **Push Service (Firebase/APNs)** | REST (исходящий) | Отправка уведомлений об угрозах на устройства |
| **Yandex Cloud ML Services** | SDK (исходящий) | Дополнительный анализ контента и транскрибация |
| **Банковские API** | REST (исходящий) | Передача информации о счетах мошенников |
| **Правоохранительные органы** | API / Защищенный канал | Передача данных о подтвержденных мошенниках |
| **Yandex Cloud S3** | SDK (исходящий) | Хранение зашифрованных записей разговоров |
