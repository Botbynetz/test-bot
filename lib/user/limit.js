const fs = require('fs') 
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))

/********** FUNCTION LIMIT ***************/
       const addLimit = (sender) => {
        	const obj = {id: sender, limit : 100}
            _limit.push(obj)
            fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
        }
		
		const addLimitUser = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }	
		
      const checkLimituser = (sender) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _limit[position].limit
            }
        }
		
		 const confirmLIMIT = (sender, amount) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }


module.exports = {
	addLimit,
	addLimitUser,
	checkLimituser,
	confirmLIMIT
}