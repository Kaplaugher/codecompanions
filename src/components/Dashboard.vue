<template>
    <div>
        <h3>Events Dashboard</h3>
        <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
        <hr>
        <app-add-event></app-add-event>
        <hr>
        <div class="col-md-12">
            <app-event-item
                    v-for="(event_item, index) in this.$store.state.events"
                    :event="event_item"
                    key="index"
            ></app-event-item>
        </div>
    </div>
</template>
<script>
    import { firebaseApp, eventsRef } from '../firebaseApp'
    import AddEvent from './AddEvent.vue'
    import EventItem from './EventItem.vue'
    export default {
      methods: {
        signOut() {
          this.$store.dispatch('signOut')
          firebaseApp.auth().signOut()
        }
      },
      components: {
        appAddEvent: AddEvent,
        appEventItem: EventItem
      },
      mounted() {
        eventsRef.on('value', snap => {
          let events = []
          snap.forEach(event => {
            events.push(event.val())
          })
          this.$store.dispatch('setEvents', events)
        })
      }
    }
</script>