import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import { DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import Header from 'components/Header';
import { Close, DragDots, Home } from 'components/Icon';
import { colors, fonts } from 'constants/theme';
import httpClient from 'remotes/index';
import Button from 'components/Button';
import { defaultData } from '.';

import dynamic from 'next/dynamic';

const DragDropContext = dynamic(
  async () => {
    const mod = await import('react-beautiful-dnd');
    return mod.DragDropContext;
  },
  { ssr: false }
);

const Droppable = dynamic(
  async () => {
    const mod = await import('react-beautiful-dnd');
    return mod.Droppable;
  },
  { ssr: false }
);
const Draggable = dynamic(
  async () => {
    const mod = await import('react-beautiful-dnd');
    return mod.Draggable;
  },
  { ssr: false }
);

const grid = 8;
const getItemStyle = (
  isDragging: boolean,
  draggableStyle?: DraggingStyle | NotDraggingStyle
) => ({
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? '#1C302E' : 'none',
  borderColor: isDragging ? colors.primary : colors.gray03,
  ...draggableStyle,
});

const Modify = () => {
  const getData = async () => {
    return httpClient
      .get(`/api/v1/member/${process.env.NEXT_PUBLIC_MEMBER_ID}/keyword`)
      .then((res) => res.data.response);
  };

  const modifyData = async (data: {}) => {
    return httpClient.put(
      `/api/v1/member/${process.env.NEXT_PUBLIC_MEMBER_ID}/keyword`,
      data
    );
  };

  const router = useRouter();

  const {
    isLoading,
    data = defaultData,
    error,
  } = useQuery('keyword', getData, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(modifyData, {
    onSuccess: () => {
      console.log('성공');
      router.push('/keyword');
    },
  });

  const [list, setList] = useState([...data]);

  const modifyHandler = useCallback(() => {
    const putData = list.map(
      ({ member_criteria_id, criteria_name }, index) => ({
        member_criteria_id,
        criteria_name,
        weight: index + 1,
        used: true,
      })
    );
    mutate({ member_criteria: putData });
  }, [list]);

  const onDragEnd = useCallback(
    (result: any) => {
      if (!result.destination) {
        return;
      }

      const items = reorder(
        list,
        result.source.index,
        result.destination.index
      );

      setList(items);
    },
    [list]
  );

  const reorder = (
    list: { criteria_name: string; member_criteria_id: number }[],
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <Wrap>
      <Header
        leftButton={
          <button
            onClick={() => {
              router.push('/keyword');
            }}
            style={{ display: 'flex' }}
          >
            <Close color={colors.gray06} width="24" />
          </button>
        }
        rightButton={
          <button
            onClick={() => {
              router.push('/');
            }}
            style={{ display: 'flex' }}
          >
            <Home width="24" color={colors.gray06} />
          </button>
        }
      >
        JOPMARKE
      </Header>
      <Title>
        <Strong>이직시</Strong> 어떤 키워드가 <Bold>가장 중요한가요?</Bold>
        <Description>설정한 키워드대로 내공고 순위가 매겨집니다.</Description>
      </Title>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <List {...provided.droppableProps} ref={provided.innerRef}>
              {list.map(
                (
                  item: { criteria_name: string; member_criteria_id: number },
                  index: number
                ) => (
                  <Draggable
                    key={`item-${item.member_criteria_id}`}
                    draggableId={`item-${item.member_criteria_id}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <Rank
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <Name>
                          <span>{!snapshot.isDragging ? index + 1 : ''}</span>
                          {item.criteria_name}
                        </Name>
                        <DragButton>
                          <DragDots width="20" color={colors.white} />
                        </DragButton>
                      </Rank>
                    )}
                  </Draggable>
                )
              )}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
      <Button
        full
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
        onClick={modifyHandler}
      >
        저장하기
      </Button>
    </Wrap>
  );
};

export default Modify;

const Wrap = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Title = styled.div`
  ${fonts.s26};
  color: ${colors.white};
  padding: 24px 30px 0;
`;

const Description = styled.span`
  display: block;
  margin: 8px 0 36px;
  color: ${colors.gray05};
  ${fonts.s14};
`;

const Strong = styled.span`
  color: ${colors.primary};
  font-weight: 700;
`;

const Bold = styled.span`
  display: block;
  margin-top: 4px;
  font-weight: 700;
`;

const List = styled.div`
  padding: 0 20px 60px;
  user-select: none;
`;

const Rank = styled.div<{ style: object }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 16px;
  margin-bottom: 8px;
  border: 1px solid ${colors.gray03};
  border-radius: 4px;
  ${fonts.s16};
  color: ${colors.gray07};
  font-weight: 600;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  > span {
    min-width: 20px;
    text-align: center;
    font-weight: 700;
    margin-right: 8px;
  }
`;

const DragButton = styled.button``;
