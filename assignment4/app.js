// new Vue({
//     el: '#exercise',
//     data: {
//         changeColor = false
  
//     },
//     computed:{
//         myClass: function(){
//             return{
//                 highlight: this.changeColor,
//                 shrink: !this.changeColor
//             }
//         }

//     },
//     methods: {
//       startEffect: function() {
//         setInterval(function(){
//                     this.changeColor = !this.changeColor;         
//                }.bind(this), 2000);
      
//       }
//     }
//   });
new Vue({
    el: '#exercise',
    data: {
        changeColor: false
    },

    methods : {
        startEffect: function() {
            setInterval(function(){
                this.changeColor = !this.changeColor;         
           }.bind(this), 2000);

            //alert(this.changeColor);
        }
    },

    computed: {
        myClass: function() {
            return {
                highlight: this.changeColor,
                shrink: !this.changeColor
          }
        }
    }
})