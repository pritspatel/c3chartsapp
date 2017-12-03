package com.prits.charts.c3chartapi.web;

import com.prits.charts.c3chartapi.entity.LineChartData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/data")
public class ChartController {

    @GetMapping("/lineChart")
    public HashMap<String,List<Integer>> getLineChartData(){
        //LineChartData data = new LineChartData();
        HashMap<String, List<Integer>> dataMap = new HashMap<>();
        dataMap.put("data1", Arrays.asList(30, 20, 50, 40, 60, 50));
        dataMap.put("data2", Arrays.asList(200, 130, 90, 240, 130, 220));
        dataMap.put("data3", Arrays.asList(300, 200, 160, 400, 250, 250));
        //data.setData(dataMap);
        return dataMap;
    }
}
