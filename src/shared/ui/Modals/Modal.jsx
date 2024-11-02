import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Portal} from '../Portal/Portal';
import s from './Modal.module.scss';

const Modal = (props) => {
	const {className, children, isOpen, onClose, lazy, id, ...rest} = props;
	const [isClosing, setIsClosing] = useState(false);
	const [isMounted, setisMounted] = useState(false);

	const ANIMATION_DELAY = 300;
	const timeRef = useRef();

	const mods = {
		[s.opened]: isOpen,
		[s.isClosing]: isClosing,
	};

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timeRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onContentClick = useCallback((e) => {
		e.stopPropagation();
	}, []);

	const onKeyDown = useCallback(
		(event) => {
			if (event.key === 'Escape') {
				closeHandler();
			}
		},
		[closeHandler]
	);

	useEffect(() => {
		if (isOpen) {
			setisMounted(true);
		}
	}, [isOpen]);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timeRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={classNames(s.Modal, mods, [className])} {...rest}>
				<div className={s.overlay} onClick={closeHandler}>
					<div id={id} className={s.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};

export default memo(Modal);
