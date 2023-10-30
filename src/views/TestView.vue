<script setup>
    import DataTable from 'datatables.net-vue3';
    import DataTablesCore from 'datatables.net';
    import jquery from 'jquery';
    
    DataTable.use(DataTablesCore);
    
    const data = [
        [1, 2],
        [3, 4],
        [5, 6],
    ];

    alert(jquery.fn.jquery);
</script>

<template>
    <div class="test">123</div>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <DataTable 
                    :data="data" 
                    :searching="false"
                    class="display">
                    <thead>
                        <tr>
                            <th>A</th>
                            <th>B</th>
                        </tr>
                    </thead>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<style>
@import 'datatables.net-dt';
@import 'datatables.net-responsive-dt';
</style>
