<template>
    <div class="Timeline">
        <div class="container">
                <!--first section-->
                <div class="row align-items-center how-it-works d-flex">
                    <div class= "col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                        <div class="circle font-weight-bold">1</div>
                    </div>
                    <div class="col-6">
                        <h5>Fully Responsive</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
                    </div>
                </div>
                <!--path between 1-2-->
                <div class="row timeline">
                    <div class="col-2">
                        <div class="corner top-right"></div>
                    </div>
                    <div class="col-8">
                        <hr/>
                    </div>
                    <div class="col-2">
                        <div class="corner left-bottom"></div>
                    </div>
                </div>
                <!--second section-->
                <div class="row align-items-center justify-content-end how-it-works d-flex">
                    <div class="col-6 text-right">
                        <h5>Using Bootstrap</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
                    </div>
                    <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                        <div class="circle font-weight-bold">2</div>
                    </div>
                </div>
                <!--path between 2-3-->
                <div class="row timeline">
                    <div class="col-2">
                        <div class="corner right-bottom"></div>
                    </div>
                    <div class="col-8">
                        <hr/>
                    </div>
                    <div class="col-2">
                        <div class="corner top-left"></div>
                    </div>
                </div>
                <!--third section-->
                <div class="row align-items-center how-it-works d-flex">
                    <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                        <div class="circle font-weight-bold">3</div>
                    </div>
                    <div class="col-6">
                        <h5>Now with Pug and Sass</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        props: {},
    };
</script>
<style lang="scss">
    @import '_Timeline.scss';
</style>
