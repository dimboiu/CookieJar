# CookieJar
A simple javascript object to handle browser cookies. 

## How to
Include the script in your page:

```html
<script src="path/to/cookiejar.js"></script>
```

Once included in the page the script create a object named CookieJar that gives you a simple to use interface to browser cookies. 

The object consists of 3 public functions: 

```javascript
/*
 * Saves a cookie for the supplied time(in seconds)
 */
CookieJar.put(name, value, expiration);

/*
 * Gets the value of a cookie or null if not present
 */
CookieJar.get(name);

/*
 * Removes a cookie
 */
CookieJar.remove(name);
```

##TODO: 
* write tests