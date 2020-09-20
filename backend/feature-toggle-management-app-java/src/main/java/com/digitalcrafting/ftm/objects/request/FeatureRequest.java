package com.digitalcrafting.ftm.objects.request;

import lombok.Data;

import java.util.List;

@Data
public class FeatureRequest {
    private String customerId;
    private List<String> names;
}
