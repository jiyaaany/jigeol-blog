import { Card, Modal, Button, Form } from 'react-bootstrap';
import { Comment } from '../instance';
import { CSSProperties, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faEdit, faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import styled from 'styled-components';

type CommentProps = {
  comment: Comment,
  style?: CSSProperties,
  deleteComment: (comment: Comment) => void;
}

const CommentRegDate = styled.p`
  color: #898989;
`;

const CommentCard = ({ comment, style, deleteComment }: CommentProps) => {
  const [reply, setReply] = useState('');
  const [show, setShow] = useState(false);
  const [replying, setReplying] = useState(false);
  const [editing, setEditing] = useState(false);

  const replyComment = () => {

  }

  const editComment = () => {

  }

  const hideModal = () => {
    setShow(false);
    deleteComment(comment);
  }

  return (
    <Card body style={style}>
      {comment.content} <br />
      <CommentRegDate>{moment(comment.reg_date, 'YYYYMMDD').fromNow()}</CommentRegDate>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <FontAwesomeIcon icon={replying ? faTimes : faReply} onClick={() => setReplying(!replying)} className={'mr-3 transform-scale-1'} />
        <FontAwesomeIcon icon={faEdit} onClick={editComment} className={'mr-3 transform-scale-1'} />
        <FontAwesomeIcon icon={faTrashAlt} onClick={() => setShow(true)} className={'transform-scale-1'} />
      </div>

      {replying && (
        <>
          <Form.Control as="textarea" rows={3} className={'mt-3'} value={reply} placeholder="댓글을 입력하세요." onChange={(e) => setReply(e.target.value)} />
          <div className={'flex-center-end'}>
            <Button variant="grape" className={'mt-3'} onClick={replyComment}>댓글 입력</Button>
          </div>
        </>
      )}

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-90w"
        onHide={() => setShow(false)}
        show={show}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            댓글 삭제
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            댓글을 삭제하시겠습니까?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)}>닫기</Button>
          <Button onClick={hideModal}>삭제</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default CommentCard;
