# useSearchParams

# Debouncing:

typing slow = 200ms
typing fast = 30ms

Performance:
- iphone pro max = 14 letters * 1000 People = 14000 times API CALL
- But with debouncing = 3 API Calls * 1000 = 3000

Debouncing with 200ms:
- if difference between 2 key strokes is <200ms ---> DECLINE API Call
- > 200ms make an API Call


# Cache:
time complexity for search in array = O(n)
time complexity for search in Object = O(1)

[i, ip, iph, iphon, iphone]

{
    i: 
    ip: 
    iph: 
    iphon:
    iphone:
}

new Map() i.e. hashMap

#
Live Chat >>>>>>>> infinite scroll >>>>> Pagination