export default function() {

  this.namespace = '/api';

  this.get('/players', function() {
    return {
      data: [{
        type: 'player',
        id: 'p90',
        attributes: {
          name: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          category: 'Estate',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
        }
      }, {
        type: 'player',
        id: 'p91',
        attributes: {
          name: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          category: 'Condo',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
          description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
        }
      }, {
        type: 'player',
        id: 'p92',
        attributes: {
          name: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          category: 'Apartment',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
        }
      }]
    };
  });


  // this.get('/games', function() {
  //   return {
  //     data: [{
  //       type: 'game',
  //       id: 'game1001',
  //       attributes: {
  //         name: 'Grand Old Mansion',
  //         players: this.player_data,
  //       }
  //     },
  //     {
  //       type: 'game',
  //       id: 'game1002',
  //       attributes: {
  //         name: 'XXXXX Old Mansion',
  //         players: this.player_data,
  //       }
  //     }
  //   ]
  //   };
  // });

  this.get('/players/player300', function() {
    return {
      data: {
        type: 'player',
        id: 'player300',
        attributes : {
          name: 'mj300'
        }
      }
    }
  });

  this.get('/players/player301', function() {
    return {
      data: {
        type: 'player',
        id: 'player301',
        attributes : {
          name: 'pat301'
        }
      }
    }
  });


  this.get('/games/game1001', function() {
    return {
      data: {
        type: 'game',
        id: 'game1001',
        attributes: {
          name: 'Grand XXX Mansion',
        },
        relationships: {
          players: {
            data: [{
              type: 'player',
              id: 'player301',
            },{
              type: 'player',
              id: 'player300',
            }]
          }
        }
      }
    }
  });
}