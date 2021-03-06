import { ChatTeardropDots } from 'phosphor-react-native';
import React, { useRef, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';


import { styles } from './styles';
import {Options} from '../Options';
import {Form} from '../Form';
import {Success} from '../Sucess';
import { feedbackTypes } from '../../utils/feedbackTypes';


export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    const bottomSheetRef = useRef<BottomSheet>(null);

    function handleOpen() {
        bottomSheetRef.current?.expand()
    }

    function handleRestartFeedBack() {
        setFeedbackType(null);
        setFeedbackSent(false);
    }

    function handleFeedBackSent() {        
        setFeedbackSent(true);
    }

  return (
   <>
    <TouchableOpacity
        style={styles.button}
        onPress={handleOpen}
    >
        <ChatTeardropDots
            size={24}
            weight="bold"
            color={theme.colors.text_on_brand_color}
        />
    </TouchableOpacity>

    <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}      
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator} 
        >
       {
           feedbackSent ? 
           <Success onSendAnotherFeedback={handleRestartFeedBack}/>
           :
           <>
                {           
                    feedbackType ? 
                    <Form
                        feedbackType={feedbackType}
                        onFeedbackCanceled={handleRestartFeedBack}
                        onFeedbackSent={handleFeedBackSent}
                    />    
                    :
                    <Options onFeedbackTypeChanged={setFeedbackType}/>
                }
            </>
       }
    </BottomSheet>
   </>
  );
}

export default gestureHandlerRootHOC(Widget);