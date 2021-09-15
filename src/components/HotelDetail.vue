<template>
  <div>
      <section class="section">
        <h1 class="title">{{hotel.name}}</h1>
        <h2 class="subtitle">
            {{hotel.description}}
        </h2>
        </section>
        <div class="columns">
            <div class="column is-8">
                <section>                    
                    <b-carousel :indicator-inside="false">
                        <b-carousel-item v-for="(image, i) in hotel.images" :key="i">
                            <b-image class="image" :src="image"></b-image>
                        </b-carousel-item>                        
                    </b-carousel>
                </section>
            </div>   
            <div class="column is-4">
                <div class="block">
                    country {{hotel.country}}
                </div>  
                <div class="block">
                    city {{hotel.city}}
                </div>
                <div class="block">
                    price {{hotel.price}}
                </div>
                <div class="block">
                    stars {{hotel.stars}}
                </div>  
                <div class="is-align-content-center">                     
                    <b-rate
                        v-model="hotel.rating"                              
                        show-score                        
                        icons= 'star'
                        icon-pack="fas"
                        maxs=5
                        spaced                   
                        >
                    </b-rate>                    
                    
                </div>                
            </div>         
        </div>
  </div>
</template>

<script>
import { MessageBus } from "@podium/browser";
const messageBus = new MessageBus();

export default {
  name: 'HotelDetail',
  props: {
    msg: String
  },
  data:()=> ({
    hotelid: null,
    hotel:  null
  }),  
  mounted: function() {
    messageBus.subscribe("internalchannel", "hotel", event => {
      this.hotel = event.payload.hotel;
    });
  },    
}
</script>


