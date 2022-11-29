import { Badge, Col, Row, Stack } from 'react-bootstrap'
import { useNote } from './NoteLayout'

const Note = () => {
  const note = useNote()

  return (
    <>
      <Row className="align-items-center mb-r">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-rap">
              {note.tags.map(tag => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
      </Row>
    </>
  )
}

export default Note
