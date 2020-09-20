package com.digitalcrafting.ftm.repository.mapper;

import com.digitalcrafting.ftm.repository.entities.FeatureToggleEntity;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface FeatureToggleMapper {

    String TABLE_NAME = "FEATURE_TOGGLES";

    List<FeatureToggleEntity> getAll();

    List<FeatureToggleEntity> selectEntitiesByList(@Param("list") List<String> names);

    @Insert("insert into " + TABLE_NAME + "(technical_name, display_name, expires_on, description,inverted)" +
            "VALUES (#{technicalName},#{displayName},#{expiresOn},#{description},#{inverted})")
    void insert(FeatureToggleEntity entity);

    @Update("update " + TABLE_NAME + " set " +
            "display_name = #{displayName}," +
            "expires_on = #{expiresOn}," +
            "description = #{description}," +
            "inverted = #{inverted}" +
            "where technical_name = #{technicalName}")
    void update(FeatureToggleEntity entity);
}
