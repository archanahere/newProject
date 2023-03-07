<template>
    <div>
        <div class="card" style="width: 18rem;">
            <div class="form-floating mb-3">
            <input type="Task Title" v-model="Task_Name" class="form-control" id="floatingInput" placeholder="Task Name">
            <label for="floatingInput">Task Name</label></div>
            
            <div class="form-floating mb-3">
            <input type="text-area" v-model="Task_details" class="form-control" id="floatingInput" placeholder="Task Name">
            <label for="floatingInput">Task Name</label>
            <span id="start"></span> <a href="#" onclick="picker.show(); return false;">Change</a>

            <!-- <v-date-picker  mode="dateTime" is24hr>
            <template v-slot="{ inputValue, inputEvents }">
            <input v-model="stdate"
              class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
              :value="inputValue"
              v-on="inputEvents"
            />
            </template>
            </v-date-picker>
            
            <v-date-picker mode="dateTime" is24hr>
            <template v-slot="{ inputValue, inputEvents }">
            <input v-model="eddate"
              class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
              :value="inputValue"
              v-on="inputEvents"
            />
            </template>
            </v-date-picker> -->
            <button @click="watch">
            
            </button>
  
  </div>
</div>
    </div>

</template>

<script>

//  DayPilot.Locale.register(
//   new DayPilot.Locale('en-us', 
//   {
//     dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
//     dayNamesShort: ['Su','Mo','Tu','We','Th','Fr','Sa'],
//     monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
//     monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
//     timePattern: 'h:mm tt',
//     datePattern: 'M/d/yyyy',
//     dateTimePattern: 'M/d/yyyy h:mm tt',
//     timeFormat: 'Clock12Hours',
//     weekStarts: 0
//   }
// ));
export default {
    nmae:'addtask',
    
    data(){
        return{
            // Task_Name:String,
            // Task_details:String,
            // stdate:String,
            // eddate:String
        }
    },watch: {
    addTasks() {
      {
        this.$emit("task added",this.Task_Name,this.Task_details,this.stdate,this.eddate)
      }
    }
}
}
        </script>

<style>

</style>