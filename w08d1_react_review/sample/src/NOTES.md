# Component Hierarchy




# All the state: 
## the current selected Destination
## a single Destination's Name
## how many Destintations there are in the list *****


# a single piece of state should be owned by a component in the hierarchy such that the owner is :
# 'as high up as it needs to be, but no higher'
# a piece of state needs to be as high up as it can be, so that it and any other component that will use
# that piece of state is an child of that owner-component



# App 



## SearchBar with Summary (Accept Search Options and Count the Total Responses for that search)

## DestinationList (to list several? many? destinations)

### Modal for Details

### Destination (show details about a specific Destination)
### Destination
### Destination
### Destination



# App needs to own that piece of state that will be used by both SearchBar and DestinationList
