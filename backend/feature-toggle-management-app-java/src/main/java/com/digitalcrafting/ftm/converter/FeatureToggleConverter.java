package com.digitalcrafting.ftm.converter;

import com.digitalcrafting.ftm.objects.models.CustomerToggleModel;
import com.digitalcrafting.ftm.objects.models.FeatureToggleModel;
import com.digitalcrafting.ftm.repository.entities.FeatureToggleEntity;
import com.digitalcrafting.ftm.utils.FtmUtils;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class FeatureToggleConverter {

    public static FeatureToggleEntity modelToToggleEntity(FeatureToggleModel toggle) {
        FeatureToggleEntity converted = new FeatureToggleEntity();
        converted.setTechnicalName(toggle.getTechnicalName());
        converted.setDisplayName(toggle.getDisplayName());
        converted.setDescription(toggle.getDescription());
        converted.setExpiresOn(toggle.getExpiresOn());
        converted.setInverted(toggle.isInverted());
        converted.setCustomerIds(toggle.getCustomerIds());
        return converted;
    }

    public static List<FeatureToggleModel> entityListToToggleModelList(List<FeatureToggleEntity> list) {
        if (!FtmUtils.isCollectionNullOrEmpty(list)) {
            return list.stream()
                    .map(FeatureToggleConverter::entityToToggleModel)
                    .collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    public static FeatureToggleModel entityToToggleModel(FeatureToggleEntity toggle) {
        FeatureToggleModel converted = new FeatureToggleModel();
        converted.setTechnicalName(toggle.getTechnicalName());
        converted.setDisplayName(toggle.getDisplayName());
        converted.setDescription(toggle.getDescription());
        converted.setExpiresOn(toggle.getExpiresOn());
        converted.setInverted(toggle.isInverted());
        converted.setCustomerIds(toggle.getCustomerIds());
        return converted;
    }

    public static List<CustomerToggleModel> entitiesToCustomerToggleList(List<FeatureToggleEntity> list, String customerId) {
        if (!FtmUtils.isCollectionNullOrEmpty(list)) {
            return list.stream()
                    .map(entity -> FeatureToggleConverter.entityToCustomerToggleModel(entity, customerId))
                    .collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    public static CustomerToggleModel entityToCustomerToggleModel(FeatureToggleEntity entity, String customerId) {
        CustomerToggleModel model = new CustomerToggleModel();
        model.setName(entity.getTechnicalName());
        model.setInverted(entity.isInverted());
        model.setExpired(entity.getExpiresOn().before(new Date()));
        model.setActive(entity.getCustomerIds() != null && entity.getCustomerIds().contains(customerId));
        return model;
    }
}
