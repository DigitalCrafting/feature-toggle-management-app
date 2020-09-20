package com.digitalcrafting.ftm.controller;

import com.digitalcrafting.ftm.objects.models.CustomerToggleModel;
import com.digitalcrafting.ftm.objects.models.FeatureToggleModel;
import com.digitalcrafting.ftm.objects.request.FeatureRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/features")
public class FeatureToggleController {

    private final FeatureToggleControllerService service;

    @PostMapping
    @ResponseBody
    public List<CustomerToggleModel> getCustomerTogglesList(@RequestBody FeatureRequest request) {
        return service.getCustomerTogglesList(request);
    }

    @GetMapping
    @ResponseBody
    public List<FeatureToggleModel> getTogglesList() {
        return service.getTogglesList();
    }

    @PostMapping("/create")
    public void createFeatureToggle(@RequestBody FeatureToggleModel request) {
        service.createFeatureToggle(request);
    }

    @PutMapping("/update")
    public void updateFeatureToggle(@RequestBody FeatureToggleModel request) {
        service.updateFeatureToggle(request);
    }

    @PostMapping("/archive/{toggleName}")
    public void archiveFeatureToggle(@PathVariable("toggleName") String toggleName) {
        service.archiveFeatureToggle(toggleName);
    }
}
