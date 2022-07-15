const mongoose = require('./connection')
const Fast = require('../models/fast')


const db = mongoose.connection



db.on('open', () => {
    
    const startFasts = [  
        { name: 'Supreme Fast', fastHrs: '21', dietOn: 'water only',  dietOff: 'no meat', frequency: 'daily for life'},
        { name: 'Power Fast', fastHrs: '48', dietOn: 'water only',  dietOff: 'Eat Whatever You Want', frequency: 'every week'},
        { name: 'Juice Fast', fastHrs: '48', dietOn: 'Water or Juice',  dietOff: 'healthy foods', frequency: 'Once a month'},
        { name: 'Fruit Fast', fastHrs: '72', dietOn: 'Water and Fruit',  dietOff: 'fruit and veggies', frequency: 'daily'},
        { name: 'Window Fast', fastHrs: '19', dietOn: 'WATER ONLY',  dietOff: 'Eat Whatever You Want', frequency: 'twice a week'},
        ]

    
    Fast.remove({})
    
        .then(deletedFasts => {
            console.log('this is what remove returns', deletedFasts)

            
            Fast.create(startFasts)
                .then(data => {
                    console.log('the new Fasts', data)
                    db.close()
                })
                .catch(error => {
                    console.log('error:', error)
                    db.close()
                })
        })
        .catch(error => {
            console.log('error:', error)
            db.close()
        })
    
})