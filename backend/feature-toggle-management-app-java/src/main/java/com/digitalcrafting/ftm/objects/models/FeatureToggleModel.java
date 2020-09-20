package com.digitalcrafting.ftm.objects.models;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class FeatureToggleModel {
    private String technicalName;
    private String displayName;
    private String description;
    private Date expiresOn;
    private boolean inverted;
    private List<String> customerIds;
}
