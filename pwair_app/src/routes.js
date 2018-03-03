import Login from './components/login/Login.vue'
import Header from './components/common/Header.vue'
import Body from './components/main/Body.vue'
import InfoSummary from './components/main/InfoSummary.vue'
import statistic from './components/main/statistic.vue'

export const routes = [
  { path : '/',  component : Login },
  { path: '/home', components: {
      nestedHeader : Header,
      default : Body,
      summaryView : InfoSummary
    }
    // <router-view name="nestedHeader"></router-view>
    // <router-view></router-view>
    // <router-view name="summaryView"></router-view>
  },
  { path: '/logs', components: {
      nestedHeader : Header,
      default : statistic
  }}
]
