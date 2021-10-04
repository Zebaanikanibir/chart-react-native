import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

export default function RadarChart1() {

    return (
        <View>
            <Text>RadarChart</Text>
            <RadarChart 
            captions={{
              // columns
              battery: 'Strength',
              design: 'Speed',
              useful: 'Agility',
              speed: 'Stamina',
              weight: 'Accelaration',
              height: 'Clutch'
            }}
            data={[
              // data
              {
                data: {
                  battery: 0.7,
                  design: .8,
                  useful: 0.9,
                  speed: 0.67,
                  weight: 0.8,
                  height: .5
                },
                meta: { color: 'cyan' }
              },
            ]}
            size={400}
          />
        </View>
    )
}

const styles = StyleSheet.create({



})
