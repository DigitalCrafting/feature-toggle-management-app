package com.digitalcrafting.ftm.converter;

import com.digitalcrafting.ftm.objects.models.CustomerToggleModel;
import com.digitalcrafting.ftm.objects.models.FeatureToggleModel;
import com.digitalcrafting.ftm.repository.entities.FeatureToggleEntity;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.time.LocalDate;
import java.time.ZoneOffset;
import java.util.Arrays;
import java.util.Date;

@RunWith(SpringJUnit4ClassRunner.class)
public class FeatureToggleConverterTest {

    private FeatureToggleModel model;
    private FeatureToggleEntity entity;

    @Before
    public void setUp() {
        model = new FeatureToggleModel();
        model.setTechnicalName("MODEL_TEST");
        model.setDisplayName("MODEL_TEST");
        model.setDescription("MODEL_TEST");
        model.setExpiresOn(new Date());
        model.setInverted(true);
        model.setCustomerIds(Arrays.asList("1", "2", "3"));

        entity = new FeatureToggleEntity();
        entity.setTechnicalName("ENTITY_TEST");
        entity.setDisplayName("ENTITY_TEST");
        entity.setDescription("ENTITY_TEST");
        entity.setExpiresOn(Date.from(LocalDate.of(2020, 5, 22).atStartOfDay().toInstant(ZoneOffset.UTC)));
        entity.setInverted(true);
        entity.setCustomerIds(Arrays.asList("1", "2", "3"));
    }

    @Test
    public void toggleToToggleEntity() {
        FeatureToggleEntity converted = FeatureToggleConverter.modelToToggleEntity(model);
        Assert.assertEquals(model.getTechnicalName(), converted.getTechnicalName());
        Assert.assertEquals(model.getDisplayName(), converted.getDisplayName());
        Assert.assertEquals(model.getDescription(), converted.getDescription());
        Assert.assertEquals(model.getExpiresOn(), converted.getExpiresOn());
        Assert.assertEquals(model.isInverted(), converted.isInverted());
        Assert.assertArrayEquals(model.getCustomerIds().toArray(), converted.getCustomerIds().toArray());
    }

    @Test
    public void toggleToToggleModel() {
        FeatureToggleModel converted = FeatureToggleConverter.entityToToggleModel(entity);
        Assert.assertEquals(entity.getTechnicalName(), converted.getTechnicalName());
        Assert.assertEquals(entity.getDisplayName(), converted.getDisplayName());
        Assert.assertEquals(entity.getDescription(), converted.getDescription());
        Assert.assertEquals(entity.getExpiresOn(), converted.getExpiresOn());
        Assert.assertEquals(entity.isInverted(), converted.isInverted());
        Assert.assertArrayEquals(entity.getCustomerIds().toArray(), converted.getCustomerIds().toArray());
    }

    @Test
    public void entityToCustomerToggleModel() {
        CustomerToggleModel model = FeatureToggleConverter.entityToCustomerToggleModel(entity, "1");
        Assert.assertEquals(entity.getTechnicalName(), model.getName());
        Assert.assertEquals(entity.isInverted(), model.isInverted());
        Assert.assertTrue(model.isExpired());
        Assert.assertTrue(model.isActive());
    }
}
