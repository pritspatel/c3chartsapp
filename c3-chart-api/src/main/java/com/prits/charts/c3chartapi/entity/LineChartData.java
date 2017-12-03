package com.prits.charts.c3chartapi.entity;

import java.util.List;
import java.util.Map;

public class LineChartData {

    private Map<String,List<Integer>> data;

    public Map<String, List<Integer>> getData() {
        return data;
    }

    public void setData(Map<String, List<Integer>> data) {
        this.data = data;
    }
}
