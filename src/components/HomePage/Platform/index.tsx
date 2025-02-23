/**
 * Copyright (c) Goodrain, Inc.
 *
 * This source code is licensed under the LGPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


import React from "react";
import { animated, useTrail } from "react-spring";
import styles from "./styles.module.css";
import Box from '/img/homepage/svg/box.svg';
import App from '/img/homepage/svg/app.svg';
import Integration from '/img/homepage/svg/integration.svg';
import Expand from '/img/homepage/svg/expand.svg';

export default function Platform() {

  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: 'translateY(3em)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
  })


  return (
    <div className={styles.global}>
      <animated.div style={animatedTexts[0]}>
      <h2 className={styles.title}>一站式云原生平台，兼顾易用和灵活</h2>
      <div className="row" style={{ paddingTop: '50px'}}>
        <div className="col col--3">
          <Box />
          <h3 className={styles.subtitle}>简单易用</h3>
          <p className={styles.text}>应用级操作和体验，让开发者专注业务本身，不需要学习容器、Kubernetes、微服务架构等底层系统级概念和技术</p>
        </div>
        <div className="col col--3">
          <App />
          <h3 className={styles.subtitle}>应用无需改造</h3>
          <p className={styles.text}>通过“无侵入”技术，让传统应用不需要改造就能实现微服务治理、模块化拼装、自动化运维、自动化交付等云原生能力</p>
        </div>
        <div className="col col--3">
          <Integration />
          <h3 className={styles.subtitle}>一体化平台</h3>
          <p className={styles.text}>一个平台纳管DevOps、应用全生命周期管理、服务网格、应用市场、Kubernetes多集群管理和多租户，实现开箱即用</p>
        </div>
        <div className="col col--3">
          <Expand />
          <h3 className={styles.subtitle}>丰富的扩展功能</h3>
          <p className={styles.text}>80多款开源应用和插件即点即用，通过插件和 应用市场自主扩展运维、服务治理、模块化开发等能力</p>
        </div>
      </div>
      </animated.div>
    </div>
  );
}