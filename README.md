# jscommuse
> Javascript functions in common use

## File Structure
### common
- common.js

```
1. staticJSLoad(<js file>);     // Load One Javascript File
2. dynamicJSLoad(<former js file>, <latter js file>);  // Load Two Javascript Files in Order
3. currentTime();   // Get timestamp as yyyymmddHHMMSS
4. addLoadEvent(function () { /* do something */ });    // Add Event Callback when window.onload
5. round2(1.23564, 2);     // Get High-precision Decimal
```

### bmap
- bmap.js