javascript:(function()%7Bjavascript%3A%20(function%20()%20%7Bconst%20title%20%3D%20document.title.replace(%2F%5C%5B%2Fg%2C%20'%5C%5C%5B').replace(%2F%5C%5D%2Fg%2C%20'%5C%5C%5D').replace(%2F%5C%7C%2Fg%2C%20'%5C%5C%7C').replace(%2F%5C%23%2Fg%2C%20'%5C%5C%23')%3Bconst%20url%20%3D%20document.URL.replace(%2F%5C(%2Fg%2C%20'%252528').replace(%2F%5C)%2Fg%2C%20'%252529')%3Bconst%20decodedUrl%20%3D%20decodeURI(url)%3Bconst%20result%20%3D%20'%5B'%20%2B%20title%20%2B%20'%5D('%20%2B%20decodedUrl%20%2B%20')'%3Bconsole.log(result)%3Btry%20%7Bnavigator.clipboard.writeText(result)%3B%7D%20catch%20(e)%20%7Balert('Failed%3A%20Could%20not%20write%20to%20clipboard.%5Cn'%20%2B%20e)%3B%7D%7D)()%3B%7D)()%3B
