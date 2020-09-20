package com.digitalcrafting.ftm.utils;

import java.util.Collection;

public class FtmUtils {
    public static boolean isCollectionNullOrEmpty(Collection c) {
        return c == null || c.isEmpty();
    }
}
