package com.digitalcrafting.ftm.objects.models;

import lombok.Data;

@Data
public class CustomerToggleModel {
    private String name;
    private boolean active;
    private boolean inverted;
    private boolean expired;
}
