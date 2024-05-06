<template>
  <!--begin::Charts Widget 3-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">{{ chart_title }}</span>

        <span class="text-muted fw-semibold fs-7"
          >From last {{ stats?.length }} games</span
        >
      </h3>

      <!--begin::Toolbar-->
      <!-- <div class="card-toolbar" data-kt-buttons="true">
        <a
          class="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1"
          id="kt_charts_widget_3_year_btn"
          >Year</a
        >

        <a
          class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
          id="kt_charts_widget_3_month_btn"
          >Month</a
        >

        <a
          class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
          id="kt_charts_widget_3_week_btn"
          >Week</a
        >
      </div> -->
      <!--end::Toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Chart-->
      <apexchart
        ref="chartRef"
        type="area"
        :options="chart"
        :series="series"
      ></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Charts Widget 3-->
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref, watch } from "vue";
import { useThemeStore } from "@/stores/theme";
import type { ApexOptions } from "apexcharts";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import type VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "widget-1",
  props: {
    widgetClasses: String,
    stats:Array,
    stat_name:String,
    chart_title:String
  },
  components: {},
  setup(prop) {

    //  ["cs_min", "damage_per_minute",  "gold_per_minute", "vision_score_per_minute", "kda_ratio"]:
    const challStats = {
      "cs_min": 7.8,
      "damage_per_minute": 920,
      "gold_per_minute": 460,
      "vision_score_per_minute": 0.7,
      "kda_ratio": 4.62,
      "":0
    }


      const chartRef = ref<typeof VueApexCharts | null>(null);
      const chart = ref<ApexOptions>({});
      const store = useThemeStore();

    const chartOptions = (): ApexOptions => {
      const labelColor = getCSSVariableValue("--bs-gray-500");
      const borderColor = getCSSVariableValue("--bs-gray-200");
      const baseColor = getCSSVariableValue("--bs-info");
      const lightColor = getCSSVariableValue("--bs-info-light");

      return {
        chart: {
          fontFamily: "inherit",
          type: "area",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {},
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "solid",
          opacity: 0.5,
        },
        stroke: {
          curve: "smooth",
          show: true,
          width: 3,
          colors: ["#E1B43E", "#3E83E1"],
        },
        xaxis: {
          categories: ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            style: {
              colors: labelColor,
              fontSize: "12px",
            },
          },
          crosshairs: {
            position: "front",
            stroke: {
              color: baseColor,
              width: 1,
              dashArray: 3,
            },
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: labelColor,
              fontSize: "12px",
            },
          },
        },
        states: {
          normal: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          hover: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "none",
              value: 0,
            },
          },
        },
        tooltip: {
          style: {
            fontSize: "12px",
          },
          y: {
            formatter: function (val) {
              return  val + " " + (prop.chart_title || "");
            },
          },
        },
        colors: ["#E1B43E", "#3E83E100"],
        grid: {
          borderColor: borderColor,
          strokeDashArray: 4,
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        markers: {
          strokeColors: ["#E1B400"],
          strokeWidth: 3,
        },
      };
    };


    const series = [
      {
        name: "You",
        data: prop.stats,//,
      },
    {
        name: "Reference",
        data: Array(prop.stats?.length).fill(challStats[prop.stat_name || ""]),//,
      },
    ];

    const themeMode = computed(() => {
      return store.mode;
    });

    onBeforeMount(() => {
      Object.assign(chart.value, chartOptions());
    });

    const refreshChart = () => {
      if (!chartRef.value) {
        return;
      }

      chartRef.value.updateOptions(chartOptions());
    };

    watch(themeMode, () => {
      refreshChart();
    });

    return {
      chart,
      series,
      chartRef

    };
  },
});


</script>
