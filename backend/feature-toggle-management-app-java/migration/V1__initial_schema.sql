create table FEATURE_TOGGLES (
    technical_name VARCHAR(20) NOT NULL,
    display_name VARCHAR(20) NOT NULL,
    expires_on TIMESTAMP,
    description VARCHAR(50),
    inverted NUMBER(1) DEFAULT 0
);

alter table FEATURE_TOGGLES add constraint FT_PK primary key (technical_name);

create table TOGGLE_CUSTOMERS (
    customer_id VARCHAR(20) NOT NULL,
    toggle_technical_name VARCHAR(20) NOT NULL
);

alter table TOGGLE_CUSTOMERS add constraint FC_PK primary key (customer_id, toggle_technical_name);

alter table TOGGLE_CUSTOMERS add constraint FC_FK foreign key (toggle_technical_name) references FEATURE_TOGGLES(technical_name);

