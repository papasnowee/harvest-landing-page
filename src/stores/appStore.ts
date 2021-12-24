import React from 'react'
import { makeObservable, action, observable } from 'mobx'

class AppStore {
  constructor() {
    makeObservable(this)
  }

  @observable
  ref = null

  @action.bound
  setRef(ref: React.MutableRefObject<null>) {
    this.ref = ref
  }
}

export const appStore = new AppStore()
