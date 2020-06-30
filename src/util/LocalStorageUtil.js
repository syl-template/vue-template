export let LocalStorageUtil = {
    methods: {
        localStorageSetItem(key, val, expires = 0) {
            expires = expires === 0 ?  0: Date.now() + 1000 * 60 * expires;
            let content = JSON.stringify({
                value: val,
                expires: expires
            })
            window.localStorage.setItem(key, content)
        },

        localStorageGetItem(key) {

            try {
                if (this.isExpires(key)) {
                    this.localStoragRemoveItem(key)
                    console.log("过期啦-1")
                    return null
                } else {
                    let value = JSON.parse(window.localStorage.getItem(key)).value
                    return value
                }
            } catch (error) {
                console.log("error", error)
                return null
            }

        },
        localStorageGetExpires(key) {
            try {
                let expires = JSON.parse(window.localStorage.getItem(key)).expires
                return expires
            } catch (error) {
                console.log(error)
                return null
            }
        },
        isExpires(key) {
            let isExpire = true
            let expires = this.localStorageGetExpires(key)
            if (expires === 0) {
                // 值为0的情况是永不过期
                return false
            } else if (expires === null) {
                // 不存在也是过期了
                return true
            } else {
                let now = Date.now();
                console.log(now, expires)
                // 当前时间是否大于过期时间
                isExpire = now > expires;
            }
            return isExpire
        },
        localStoragRemoveItem(key) {
            try {
                window.localStorage.removeItem(key)
                return true
            } catch (error) {
                return false
            }
        }
    }
};

