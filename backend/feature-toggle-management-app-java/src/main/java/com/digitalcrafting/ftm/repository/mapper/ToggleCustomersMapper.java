package com.digitalcrafting.ftm.repository.mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ToggleCustomersMapper {
    String TABLE_NAME = "TOGGLE_CUSTOMERS";

    @Insert("insert into " + TABLE_NAME + " values (#{customerId}, #{toggleName})")
    void insert(String customerId, String toggleName);

    @Delete("delete from " + TABLE_NAME + " where toggle_technical_name = #{toggleName}")
    void deleteByToggleName(String toggleName);
}
