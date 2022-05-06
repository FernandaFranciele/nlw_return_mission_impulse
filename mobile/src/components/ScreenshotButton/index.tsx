import { Trash, Camera } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
    screenshot: string | null;
    onTakeShot: () => void;
    OnRemoveShot: () => void;
}

export function ScreenshotButton({screenshot, onTakeShot, OnRemoveShot}: Props) {
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={screenshot ? OnRemoveShot : onTakeShot}
    >
        {
            screenshot
            ?
            <View>
                <Image 
                style={styles.image}
                source={{ uri: screenshot }}
                />
                <Trash 
                size={22}
                color={theme.colors.text_secondary}
                weight="fill"
                style={styles.removeIcon}
                />
            </View>           
            :
            <Camera 
                size={24}
                color={theme.colors.surface_primary}
                weight="bold"
            />
        }

    </TouchableOpacity>
  );
}