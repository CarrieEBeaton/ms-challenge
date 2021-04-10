import { Pipe } from "@angular/core";

@Pipe({ name: 'HashMap'})
export class HashMap<K, V> {
  add(map: Map<K, V>, key: K, value: V) {
    if (map.has(key)) {
      throw new TypeError("Key " + key + " already exists!");
    } else {
      map.set(key, value);
    }
  }
}
