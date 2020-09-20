package com.digitalcrafting.ftm.controller;

import com.digitalcrafting.ftm.converter.FeatureToggleConverter;
import com.digitalcrafting.ftm.objects.models.CustomerToggleModel;
import com.digitalcrafting.ftm.objects.models.FeatureToggleModel;
import com.digitalcrafting.ftm.objects.request.FeatureRequest;
import com.digitalcrafting.ftm.repository.entities.FeatureToggleEntity;
import com.digitalcrafting.ftm.repository.mapper.FeatureToggleMapper;
import com.digitalcrafting.ftm.repository.mapper.ToggleCustomersMapper;
import com.digitalcrafting.ftm.utils.FtmUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
class FeatureToggleControllerService {

    private final FeatureToggleMapper toggleMapper;
    private final ToggleCustomersMapper customersMapper;

    public List<CustomerToggleModel> getCustomerTogglesList(FeatureRequest request) {
        List<FeatureToggleEntity> entities = toggleMapper.selectEntitiesByList(request.getNames());
        return FeatureToggleConverter.entitiesToCustomerToggleList(entities, request.getCustomerId());
    }

    public List<FeatureToggleModel> getTogglesList() {
        List<FeatureToggleEntity> entities = toggleMapper.getAll();
        return FeatureToggleConverter.entityListToToggleModelList(entities);
    }

    public void createFeatureToggle(FeatureToggleModel request) {
        toggleMapper.insert(FeatureToggleConverter.modelToToggleEntity(request));
        insertCustomersIfProvided(request);
    }

    public void updateFeatureToggle(FeatureToggleModel request) {
        toggleMapper.update(FeatureToggleConverter.modelToToggleEntity(request));
        customersMapper.deleteByToggleName(request.getTechnicalName());
        insertCustomersIfProvided(request);
    }

    private void insertCustomersIfProvided(FeatureToggleModel request) {
        List<String> customerIds = request.getCustomerIds();
        if (!FtmUtils.isCollectionNullOrEmpty(customerIds)) {
            customerIds.forEach(customerId -> customersMapper.insert(customerId, request.getTechnicalName()));
        }
    }

    public void archiveFeatureToggle(String toggleName) {
        this.customersMapper.deleteByToggleName(toggleName);
    }
}
