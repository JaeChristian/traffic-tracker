
import {Modal, ModalOverlay, ModalContent, ModalBody, Image }from "@chakra-ui/react";

function CameraModal({isOpen, onOpen, onClose, obj, UpdateHandler}) {
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent minW="50%">
                <Image 
                    src={obj.camera_url.url + "?" + UpdateHandler} 
                    alt={obj.camera_url.description} 
                />
            </ModalContent>
        </Modal>
    )
}
export default CameraModal;